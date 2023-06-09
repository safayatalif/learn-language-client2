import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from "../../components/shared/card/Card";


const Classes = () => {
    const [language, setLanguage] = useState("English")
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                        {
                            classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                        {
                            classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                        {
                            classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                        {
                            classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                        {
                            classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Classes;