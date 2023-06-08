import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Classes = () => {
    const [language , setLanguage] = useState("English")
    const [classItems, setClassItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${language}`)
            .then((res) => res.json())
            .then((data) => {
                setClassItem(data);
            });
    }, [language])

    console.log(classItems)

    return (
        <div className="pt-20">
            <Tabs>
                <TabList>
                    <Tab onClick={() => setLanguage('English')}>
                        <button className="btn btn-primary btn-outline">English</button>
                    </Tab>
                    <Tab onClick={() => setLanguage('Spanish')}>
                        <button className="btn btn-primary btn-outline">Spanish</button>
                    </Tab>
                    <Tab onClick={() => setLanguage('Japanese')}>
                        <button className="btn btn-primary btn-outline">Japanese</button>
                    </Tab>
                    <Tab onClick={() => setLanguage('French')}>
                        <button className="btn btn-primary btn-outline">French</button>
                    </Tab>
                    <Tab onClick={() => setLanguage('Chinese')}>
                        <button className="btn btn-primary btn-outline">Chinese</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Classes;