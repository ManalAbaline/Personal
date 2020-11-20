import React from 'react';
import Education from './Education';
import Experience from './Experience';
import { Grid, Cell } from 'react-mdl';

class Cv extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>


                        </div>
                        <h2 style={{ paddingTop: '2em' }}> Manal Abaline</h2>
                        <h4 style={{ color: 'grey' }}>Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p> Software Developer graduating from UOttawa on December 2021. With more than one year of experience in telecommunication and automotive industry. I am highly motivated individual seeking a full time job starting January 2022.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5> Address</h5>
                        <p1> 703-225 Wilbrod Street K1N 6L9, Ottawa ON</p1>
                        <h5>Phone</h5>
                        <p>819 329 8301</p>
                        <h5> Email</h5>
                        <p> mabal086@uottawa.ca</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education startYear={2017} endYear={2021} schoolName="University of Ottawa" schoolDescription="-Bachelor's degree in Computer engineering "  schoolDescription1="-4th year, GPA: 8.07, Dean's Honours List" />


                        <h2> Experience</h2>
                        <Experience startYear="Mai 2020" endYear="Decembre 2020" jobName="HMI Software Developer Intern - Ford Motor Company" line1="-Analyzing and fixing defects in React js based applications" line2="-Write unit tests for redux files"  line3="-Experience with automated test framework: Jest " line4="-Familiar with NPM" line5="-Worked with React class components and hooks" />
                        <Experience startYear="January 2020" endYear="April 2020" jobName="Networking Software Intern - Ford Motor Company" line1="-Developed software on QNX and Linux platforms" line2="-Created innovative solutions to the challenges presented by the vehicle networking environment" line3="Achieved high percentages of code coverage by writing unit tests for networking applications in C++ using
QNX Momentics" line4="-Learned several networking concepts"/>
                        <Experience startYear="May 2019" endYear="August 2019" jobName="Software Engineer Intern - Solacom Technologies Inc." line1="-Designed and developed software for communications equipment (.NET framework)" line2="-Designed communication software on Windows platforms using C#" line3="-Developed and adapt extensible user interfaces on a client-server architecture
using .NET" line4= "-Used to develop, design, code, unit test, debug, integrate, document and actively participate in all software
life cycle (AGILE)" line5= "-Managed source code and tickets with Git and TRAC and worked with Jenkins for Continuous Integration"/>
                         <Experience startYear="August 2019" endYear="December 2019" jobName="Software Developer Volunteer - Ashya Tech Inc." line1="Designed and developed a high-performance web-app with TypeScript, Html, CSS, Angular and JavaScript
using Ionic framework and Json files"/>
                         <Experience startYear="January 2019" endYear="December 2019" jobName= "Engineering Mentor - University Of Ottawa" line1="-Supervised the following study groups: Java (ITI 1121), Computer architecture (CEG 2136) and electric circuits course (ELG 2138)" line2="-Lead face-to-face mentorship to help students in their personal and career development" line3="-Targeted student's needs and answer their questions" line4="-Contributed in the maintenance and the development of available resources" line5="-Attended all training provided by Student Academic Success Service (SASS) and participated in the continual
promotion of the mentorship services"/>
                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Cv;