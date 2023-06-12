import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from "../../components/shared/card/Card";
import Loader from "../../components/shared/loader/Loader";


const Classes = () => {
    const [language, setLanguage] = useState("English")
    const [classItems, setClassItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://learn-language-server-roan.vercel.app/classes/language/${language}`)
            .then((res) => res.json())
            .then((data) => {
                setClassItem(data);
                setLoading(false)
            });
    }, [language])


    return (
        <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 py-12">
                <div className="space-y-4">
                    <h3 className="text-2xl text-blue-400">Our Classes</h3>
                    <h1 className="text-4xl font-semibold">Choose Your Language</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas harum maxime necessitatibus incidunt architecto!
                        Eius totam eum, culpa similique iure impedit saepe soluta
                        aut quasi, fuga quae cumque ipsam quia laboriosam labore
                        asperiores quidem. Inventore consequuntur exercitationem
                        voluptatem! Odio, minima.</p>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => { setLanguage('English'), setLoading(true) }}>
                        <button className="btn btn-primary btn-outline">English</button>
                    </Tab>
                    <Tab onClick={() => { setLanguage('Spanish'), setLoading(true) }}>
                        <button className="btn btn-primary btn-outline">Spanish</button>
                    </Tab>
                    <Tab onClick={() => { setLanguage('Japanese'), setLoading(true) }}>
                        <button className="btn btn-primary btn-outline">Japanese</button>
                    </Tab>
                    <Tab onClick={() => { setLanguage('French'), setLoading(true) }}>
                        <button className="btn btn-primary btn-outline">French</button>
                    </Tab>
                    <Tab onClick={() => { setLanguage('Chinese'), setLoading(true) }}>
                        <button className="btn btn-primary btn-outline">Chinese</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    {
                        loading ? <Loader></Loader> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                            {
                                classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                            }
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        loading ? <Loader></Loader> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                            {
                                classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                            }
                        </div>
                    }

                </TabPanel>
                <TabPanel>
                    {
                        loading ? <Loader></Loader> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                            {
                                classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                            }
                        </div>
                    }


                </TabPanel>
                <TabPanel>
                    {
                        loading ? <Loader></Loader> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                            {
                                classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                            }
                        </div>
                    }


                </TabPanel>
                <TabPanel>
                    {
                        loading ? <Loader></Loader> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                            {
                                classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                            }
                        </div>
                    }


                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Classes;