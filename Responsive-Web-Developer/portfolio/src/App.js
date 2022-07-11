import React from "react";

import PersonalDetail from "./PersonalDetail/PersonalDetail";
import ShadowCard from "./ShadowCard";
import Skills from "./Skill/Skill";
import Blogs from "./Blogs/Blogs";
import Hobbies from "./Hobbies/Hobbies";
import "./App.css";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import projectList from "./projectsList";
import ProjectGrid from "./Project/ProjectGrid";
import Pagination from "@mui/material/Pagination";

function App() {
  // skills variable
  let [skills, setSkills] = React.useState({
    html: false,
    css: false,
    responsive: true,
  });
  // pagination
  let [pagination, setPagination] = React.useState(0);
  // renderList
  let [renderList, setRenderList] = React.useState(projectList.filter(e => e.tag.includes('responsive')));
  // pagination count
  let [count, setCount] = React.useState(parseInt(renderList.length / 3) + (renderList.length % 3 === 0 ? 0 : 1));

  function renderMyList(html, css, responsive) {
    // console.log('rendermylist call')
    // console.log("sahi data", skills.html, skills.css, skills.responsive) // data sahi se nai aaraha
    setRenderList((_) => {
      // let tempList = [];
      // for (let i in projectList) {
      //   let tag = projectList[i].tag;

      //   if (html && tag.includes("html")) {
      //     tempList.push(projectList[i]);
      //     // setRenderList((pre) => [...pre, projectList[i]])
          
      //     continue;
      //   }
      //   if (css && tag.includes("css")) {
      //     tempList.push(projectList[i]);
      //     // setRenderList((pre) => [...pre, projectList[i]])
       
      //     continue;
      //   }
      //   if (responsive && tag.includes("responsive")) {
      //     tempList.push(projectList[i]);
      //     // setRenderList((pre) => [...pre, projectList[i]])
          
      //     continue;
      //   }
      // }
      // console.log('tempList', tempList)
      let tempList = projectList.filter(e => {
        let tag = e.tag // available tags
        let take = false;
        if(html){
          take = tag.includes('html') ? true: take;
        }
        if(css){
          take = tag.includes('css') ? true: take;
        }
        if(responsive){
          take = tag.includes('responsive') ? true: take;
        }
        return take;
      })
      // console.log('templist', tempList);
      setCount(parseInt(tempList.length / 3) + (tempList.length % 3 === 0 ? 0 : 1));
      return tempList;
    });
  }

  function addSkill(html, css, responsive) {
    
    setSkills((pre) => {
      renderMyList(html, css, responsive);
      return { ...pre, html:html, css:css, responsive:responsive }
    });
    
  }

  function paginationChange(event, value) {
    setPagination(value - 1);
    
  }

  return (
    <div className="app__fragment">
      {/* personal details */}
      <ShadowCard>
        <PersonalDetail />
      </ShadowCard>
      <section className="app__section__grid">
        {/* skills */}
        <ShadowCard>
          <Skills />
        </ShadowCard>
        {/* blogs */}
        <div id="app__section__blogs">
          <ShadowCard>
            <Blogs />
          </ShadowCard>
        </div>
        <div id="app__section__hobbies">
          <ShadowCard>
            <Hobbies />
          </ShadowCard>
        </div>
        <div id="app__section__experience">
          <ShadowCard>
            <Experience />
          </ShadowCard>
        </div>
      </section>
      <div id="app__project">
        <ShadowCard>
          <Project addSkill={addSkill} />
        </ShadowCard>
      </div>
      <ProjectGrid
        projectList={renderList.slice((pagination * 3) + 0, (pagination * 3 )+ 3)}
      />
      <div className="app__pagination">
        <Pagination
          defaultPage={1}
          color="primary"
          count={count}
          variant="outlined"
          shape="rounded"
          id="pagination"
          onChange={paginationChange}
        />
      </div>

      {/* projects */}
      {/* filter projects by tab\g */}
      {/* hobbies */}
      {/* experience */}
      {/* projects on different page */}
      {/* <button onClick={callPagination}>CAllme</button> */}
      <footer>
        <p>
          created by{" "}
          <strong>
            <u>Alemantrix</u>
          </strong>{" "}
          - devChallenges.io
        </p>{" "}
      </footer>
    </div>
  );
}

export default App;
