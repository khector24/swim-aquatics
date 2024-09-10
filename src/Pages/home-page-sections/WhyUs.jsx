import "../pages-styles/home-sections.css/why-us.css";
import CustomButton from "../../Components/CustomButton";

export default function WhyUs() {
    return (
        <div className="why-us">
            <h2>Why us - We are the best</h2>
            <p>Our children's swim school empowers kids with the skills
                they need to feel confident in the water — laying
                the foundation for a lifetime of enjoyment!
                Our professional, adult instructors are all about teamwork,
                getting into the water with swimmers and adapting lessons
                to revolve around each individual. In fact, we're proud
                to be the best swim school in the area,
                offering programs for all ages, with continuous
                weekly lessons available year-round, so your child
                can start and stop any time.
            </p>


            <div style={{ display: "flex" }}>
                <div>
                    <h2>Professional Swim Instructors</h2>
                    <p> Our professional kids' swim school instructors
                        go through extensive training to give your
                        child the experience and consistency they need.
                    </p>
                </div>

                <div>
                    <h2>Time-Saving Flexibility</h2>
                    <p>
                        Schedule all your kids' swim lessons simultaneously,
                        no matter what age or level.
                    </p>
                </div>

                <div>
                    <h2>Stress-Free Facilities</h2>
                    <p>
                        Your child will love our ultra-clean, 90-degree
                        water while you relax in our carpeted viewing lobby.
                    </p>
                </div>
            </div>

            <h4>Learn more about why we beleive we are the right teachers for your child!</h4>
            <CustomButton to="/about" label="About Us" />
        </div >
    );
}