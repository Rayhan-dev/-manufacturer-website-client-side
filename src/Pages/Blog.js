import React from 'react';

const Blog = () => {
    return (
        <div className='text-black lg:w-1/2 md:w-1/2 h-screen mx-auto mt-24'>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <ul>
                        <li>Stop Unnecessery Component Rendering</li>
                        <li>Using State Locally</li>
                        <li>When loading data from expternal resources,using useEffect. So that data doesn't render again and again.If needed we can use dependencies
                        </li>
                        <li>Uning hooks to render component or load data
                        </li>
                    </ul>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p> We can manage states in 4 ways:</p>
                    <ol>
                        <li>Locally</li>
                        <li>Globaly</li>
                        <li>From server</li>
                        <li>From Url</li>
                    </ol>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div class="collapse-content">
                    <p> If we use set products = [...] instead, you use the setProducts,it'll only update the array not the component that uses the vale of this array.But on the other side if we use "setProducats" it'll update the value as well as the component that uses the value of "products"</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <p>I can use array.filter method to get the searched product</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit test means checking an application if it behaves and works as expected. Its generally automated . It shound write unit test to check if the application runs prefectly as expected .</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;