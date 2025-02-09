import Footer from "../Home/Footer"
import Header from "../Home/Header"
import Accelerate from "./Accelerate"
import EducationalInstitutions from "./EducationalInstitutions"
import KeyOfferings from "./KeyOfferings"
import SkillsChallengesProgram from "./SkillsChallengesProgram"
import TransformYourInstitution from "./TransformYourInstitution"


const Learning = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Header/>
    <Accelerate/>
    <KeyOfferings/>
    <EducationalInstitutions/>
    <SkillsChallengesProgram/>
    <TransformYourInstitution/>
    <Footer/>
    </div>
    </>
  )
}

export default Learning