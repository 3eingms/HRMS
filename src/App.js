import logo from './logo.svg';
import './App.css';
import PersonalDetails from './pages/resume/personalDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ApplicantRegister from './components/applicant/ApplicantRegister';
import UserRegister from './pages/register';
import UserLogin from './pages/login';
import EducationDetails from './pages/resume/education';
import ExperienceDetails from './pages/resume/experience';
import SkillDetails from './pages/resume/skill';
import ProjectDetails from './pages/resume/project';
import JobDetails from './pages/recruiter/jobdetails';
import PostRequirement from './pages/recruiter/jobRequirement';
import SalaryPerks from './pages/recruiter/jobSalaryPerks';
import JobSkills from './pages/recruiter/jobSkill/Index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/1' element={<UserRegister />}/>
          <Route  path='/2' element={ <PersonalDetails />}/>
          <Route  path='/2/1' element={ <EducationDetails />}/>
          <Route  path='/2/1/2' element={ <ExperienceDetails />}/>
          <Route  path='/2/1/3' element={ <SkillDetails />}/>
          <Route  path='/2/1/4' element={ <ProjectDetails />}/>
          <Route  path='/3' element={ <ApplicantRegister/>}/>
          <Route  path='/1/1' element={ <UserLogin/>}/>
          {/* recruiter */}
          <Route  path='/10' element={ <JobDetails/>}/>
          <Route  path='/10/1' element={ <PostRequirement/>}/>
          <Route  path='/10/2' element={ <SalaryPerks/>}/>
          <Route  path='/10/3' element={ <JobSkills/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
