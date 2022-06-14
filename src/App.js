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
import theme from './config/theme';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/userRegister' element={<UserRegister />}/>
          <Route  path='/addPersonal' element={ <PersonalDetails />}/>
          <Route  path='/addEducation' element={ <EducationDetails />}/>
          <Route  path='/addExperience' element={ <ExperienceDetails />}/>
          <Route  path='/addSkill' element={ <SkillDetails />}/>
          <Route  path='/addProject' element={ <ProjectDetails />}/>
          <Route  path='/applicantRegister' element={ <ApplicantRegister/>}/>
          <Route  path='/userLogin' element={ <UserLogin/>}/>
          {/* recruiter */}
          <Route  path='/addJob' element={ <JobDetails/>}/>
          <Route  path='/addJobReq' element={ <PostRequirement/>}/>
          <Route  path='/addJobSalary' element={ <SalaryPerks/>}/>
          <Route  path='/addJobSkill' element={ <JobSkills/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    </ThemeProvider>
  );
}

export default App;
