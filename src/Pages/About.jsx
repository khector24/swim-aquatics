import { color } from "@mui/system";
import "./pages-styles/about.css"

export default function About() {
    return (
        <main>
            <section id="about-us" className="py-4">
                <div className="container mb-3">
                    <h1>About Us</h1>
                    <p>Splash Zone Aquatics is a passionate team dedicated to providing exceptional aquatic swimming classes and programs for children, ages 5 months and up. Led by Ethan, the owner and an experienced swim instructor, we are committed to helping your child develop essential life skills and become the best swimmer they can be.</p>

                    <h2 className="mt-4">Meet Our Instructors</h2>
                    <p>At Splash Zone Aquatics, we take pride in our team of highly qualified and caring instructors:</p>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="/images/Ethan.jpg" alt="Ethan - Swim Instructor" className="rounded-circle" />
                                    </div>
                                    <div className="col-md-10">
                                        <strong>Ethan:</strong> As the owner and operator, Ethan is not only an expert swimmer but also a friendly and patient instructor. With years of experience, he has a deep passion for teaching kids to swim and fostering a love for the water.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10">
                                        <strong>Ben:</strong> An enthusiastic instructor, Ben brings a sense of fun and adventure to every swimming class. His love for teaching and dedication to water safety make him a valuable asset to our team.
                                    </div>
                                    <div className="col-md-2">
                                        <img src="/images/Ben.jpeg" alt="Ben - Swim Instructor" className="rounded-circle" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="/images/Blank-Profile.png" alt="Bailey - Swim Instructor" className="rounded-circle" />
                                    </div>
                                    <div className="col-md-10">
                                        <strong>Bailey:</strong> With her warm and encouraging nature, Bailey creates a nurturing environment for children to build their confidence in the water. Her creativity ensures that each lesson is engaging and enjoyable.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10">
                                        <strong>Steve:</strong> As a patient and attentive instructor, Steve focuses on individual progress and tailors lessons to each child's needs. His experience in competitive swimming brings a wealth of knowledge to our programs.
                                    </div>
                                    <div className="col-md-2">
                                        <img src="/images/Blank-Profile.png" alt="Steve - Swim Instructor" className="rounded-circle" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <h2 className="mt-4">What We Offer</h2>
                    <ul className="list-group">
                        <li className="list-group-item">A wide variety of different program options and swim packages</li>
                        <li className="list-group-item">An emotional and intellectually stimulating environment</li>
                        <li className="list-group-item">Safety and supervision at all times</li>
                    </ul>

                    <h2 className="mt-4">What Students Receive</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Constant encouragement</li>
                        <li className="list-group-item">Fun-filled games</li>
                        <li className="list-group-item">Relaxed & Fun Atmosphere</li>
                        <li className="list-group-item">A Safe Environment At All Times</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
