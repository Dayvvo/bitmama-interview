import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Navbar from "../../screens/sections/nav"



const AccountScreen =()=>{
    return(
        <>
            <Navbar/>

            <Tabs
             orientation="vertical"
            >



                <TabList>
                    
                    <Tab>One</Tab>
                    
                    <Tab>Two</Tab>
                    
                    <Tab>Three</Tab>
                
                </TabList>

                <TabPanels>
                    
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>

                </TabPanels>
      
            </Tabs>

        </>
    )
}

export default AccountScreen