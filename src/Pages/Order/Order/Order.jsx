import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg"
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Menu/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderItem from "../OrderItem/OrderItem";
import { useParams } from "react-router-dom";

const Order = () => {
 
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams()
    const initialize = categories.indexOf(category)
    console.log(category)
    const [tabIndex, setTabIndex] = useState(initialize);
    const [menus] = useMenu()

    const saladItems = menus.filter(item=>item.category === 'salad')
    const pizzaItems = menus.filter(item=>item.category === 'pizza')
    const soupItems = menus.filter(item=>item.category === 'soup')
    const dessertItems = menus.filter(item=>item.category === 'dessert')
    const drinkItems = menus.filter(item=>item.category === 'drinks')
    
    return (
        <div>
            <Cover img={orderImg} title="OUR SHOP"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                  <OrderItem items={saladItems}></OrderItem>
                </TabPanel>
                <TabPanel>
                <OrderItem items={pizzaItems}></OrderItem>
                </TabPanel>
                <TabPanel>
                <OrderItem items={soupItems}></OrderItem>
                </TabPanel>
                <TabPanel>
                <OrderItem items={dessertItems}></OrderItem>
                </TabPanel>
                <TabPanel>
                <OrderItem items={drinkItems}></OrderItem>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;