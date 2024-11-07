
import blog1 from "./image/blog-1.jpg";
import blog2 from "./image/blog-2.jpg";
import blog3 from "./image/blog-3.jpg";
import doc1 from "./image/doc-1.jpg";
import doc2 from "./image/doc-2.jpg";
import doc3 from "./image/doc-3.jpg";
import doc4 from "./image/doc-4.jpg";
import doc5 from "./image/doc-5.jpg";
import doc6 from "./image/doc-6.jpg";
import pic1 from "./image/pic-1.png";
import pic2 from "./image/pic-2.png";
import pic3 from "./image/pic-3.png";
import homeimg from "./image/home-img.png";
import aboutimg from "./image/about-img.png";
import bookimg from "./image/book-img.png";

import { db } from "./firebase";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    db.collection("Users").onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => console.log(doc.data()));
      });
  }, []);
  
  function bookAppoinment(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").valueAsDate;

    //enable alert
    document.querySelector(".alert").style.display="block";

    //remove alert
    setTimeout(() => {
      document.querySelector(".alert").style.display="none";

    }, 3000);

    //reset the form
    //document.getelementbyid("bookAppoinment").value=""
    const resetForm = () => {
      document.getElementById("bookAppoinment").reset();
      document.getElementById("name").value = "";
      document.getElementById("contact").value = "";
      document.getElementById("email").value = "";
      document.getElementById("date").value = "";
    };
    



    db.collection("Users").add({
      name: name,
      contact: contact,
      email: email,
      date: date
    });

  }

  return (<>
<header className="header">

    <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> Cognion </a>

    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#book">book</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
    </nav>

    <div id="menu-btn" className="fas fa-bars"></div>

</header>


<section className="home" id="home">

    <div className="image">
        <img src={homeimg} alt="" />
    </div>

    <div className="content">
        <h3>Find your Cognitive Companion</h3>
        <p>Mental and physical health are equally important components of overall health.So let's make ourselves FIT mentally through Cognion!</p>
        <a href="#" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
    </div>

</section>

<section className="icons-container">

    <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
    </div>

    <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1040+</h3>
        <p>satisfied patients</p>
    </div>

    <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>bed facility</p>
    </div>

    <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>80+</h3>
        <p>available hospitals</p>
    </div>

</section>


<section className="services" id="services">

    <h1 className="heading"> our <span>services</span> </h1>

    <div className="box-container">

        <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>Free Consultation</h3>
            <p>You can consult to a doctor / psychologist for free for the first trial.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        {/* <!--<div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>--> */}

        <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>Expert doctors</h3>
            <p>We have top doctors from across the country , who are the best into their field and domains.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>Buy Medicines Online from India's Biggest E-Pharmacy with Express Delivery</p>
            <a href="https://pharmeasy.in/" target="_blank" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        {/* <!--<div className="box">
            <i className="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>--> */}

        <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>Mental Care</h3>
            <p>We provide you one stop solution for your mental peace and care at our platform with our exclusive features.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div> 

    </div>

</section>

<section className="about" id="about">

    <h1 className="heading"> <span>about</span> us </h1>

    <div className="row">

        <div className="image">
            <img src={aboutimg} alt="" />
        </div>

        <div className="content">
            <h3>Lets Get Ready to be Mentally FIT</h3>
            <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also help us determine how we handle stress, related to others, and make healthy choices. Mental health is important at every stage of our life, from childhood and adolescence through adulthood.</p>
            <p>Mental and physical health are equally important components of overall health.So let's make ourselves FIT mentally through Cognion.!!</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

    </div>

</section>

<section className="doctors" id="doctors">

    <h1 className="heading"> our <span>doctors</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={doc1} alt="" />
            <h3>Dr Khushboo Dewani</h3>
            <span>Psychiatrist</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/khushboo-dewani-357851167/?originalSubdomain=in" target="_blank" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc2} alt="" />
            <h3>Dr. Jitendra P. Badgujar</h3>
            <span>Counselling Psychologist(Specialist)</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="https://www.instagram.com/dr.jitendra_badgujar/?hl=en" target="_blank" className="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/jitendra-badgujar-600200209/?originalSubdomain=in" target="_blank" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc4} alt="" />
            <h3>Dr. Samir Parikh</h3>
            <span>MD - Psychiatry</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/drsamirparikh/?originalSubdomain=in" target="_blank" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc3} alt=""/>
            <h3>Dr Manish Jain</h3>
            <span>M.D.(Psychiatrist)</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/dr-manish-jain-38445733/?originalSubdomain=in" target="_blank" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc5} alt="" />
            <h3>Dr Ajit Dandekar</h3>
            <span>MD,DPM- Psychiatry</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="https://www.logintohealth.com/psychiatrist/ajit-dandekar" target="_blank" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc6} alt="" />
            <h3>Dr. Santosh Bangar</h3>
            <span>Psychiatrist</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/santosh-bangar-835887218/?originalSubdomain=in" target="_blank" className="fab fa-linkedin"></a>
            </div>
        </div>

    </div>

</section>



<section className="book" id="book">

    <h1 className="heading"> <span>book</span> now </h1>    

    <div className="row">

        <div className="image">
            <img src={bookimg} alt="" />
        </div>

        <form>
          <div class="alert">Your Appointment Has been Booked</div>
            <h3>book appointment</h3>
            <input type="text" id="name"  placeholder="name" className="box" />
            <input type="number" id="contact" placeholder="contact" className="box" />
            <input type="email" id="email" placeholder="email" className="box" />
            <input type="date" id="date" className="box" />
            <input type="submit" value="book now" className="btn" onClick={bookAppoinment}/>
        </form>

    </div>

</section>


<section className="review" id="review">
    
    <h1 className="heading"> client's <span>review</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={pic1} alt="" />
            <h3>John deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">I've been able to extend my  thanks to cognition. Despite living a great life, I used to always feel depressed and had lost interest in everything. I was unable to comprehend what I was going through. I tried Cognion after a buddy of mine highly suggested it. I'm incredibly appreciative of the psychologist and psychiatrist at Cognion who helped me comprehend and address my depression!</p>
        </div>

        <div className="box">
            <img src={pic2} alt=""/>
            <h3>Namita</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">I was not comfortable in my college. I was so isolated, had no self-confidence, and was unable to handle the pressure of my studies and my tense relationship. My Cognion therapist assisted me in regaining my confidence and self-worth. She also gave me advice on how to deal with my stress and relationship problems!</p>
        </div>

        <div className="box">
            <img src={pic3} alt=""/>
            <h3>Amaan Ali</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">My life was given a new lease because of Cognion therapy. I was on the verge of taking my life, but after just 21 days, I felt like I had my life back. I am extremely appreciative of Cognion's fast assistance and unwavering support!</p>
        </div>

    </div>

</section>



<section className="blogs" id="blogs">

    <h1 className="heading"> our <span>blogs</span> </h1>

    <div className="box-container">

        <div className="box">
            <div className="image">
                <img src={blog1} alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>How To Overcome Depression?</h3>
                <p>This guidance to ease depression comes from a psychotherapist who doesn't shy away to share her own journey out of the grips of depression. The tips are honest, based on personal experience, and supported by real life examples from the author herself.</p>
                <a href="https://insighttimer.com/blog/how-to-overcome-depression/" target="_blank" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog2} alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>Mindfulness for psychosis: healing or harmful?</h3>
                <p>Mindfulness has transformed the treatment of many mental illnesses, but people with schizophrenia have been left out. It’s time clinicians forget the frightening images of meditation-induced psychotic relapse and embrace mindfulness for treating psychosis.</p>
                <a href="https://www.leidenpsychologyblog.nl/articles/mindfulness-for-psychosis-healing-or-harmful" target="_blank" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog3} alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>Stress, anxiety and adapting to uncertainty in everyday life</h3>
                <p>Our world may seem unpredictable and uncertain, especially when others are involved. When interacting with others, we cannot know for sure what they may be thinking or planning to do, but we do a good job guessing. This may not be so easy for everyone.</p>
                <a href="https://www.leidenpsychologyblog.nl/articles/stress-anxiety-and-adapting-to-uncertainty-in-everyday-life" target="_blank" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

    </div>

</section>



<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>quick links</h3>
            <a href="#"> <i className="fas fa-chevron-right"></i> home </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> services </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> about </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> doctors </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> book </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> review </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> blogs </a>
        </div>

        <div className="box">
            <h3>our services</h3>
            <a href="#"> <i className="fas fa-chevron-right"></i> mental care </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> anonymous message </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> Medicines </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> one to one counselling </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +91 9031488680 </a>
            <a href="#"> <i className="fas fa-phone"></i> +91 9876543210</a>
            <a href="#"> <i className="fas fa-envelope"></i> companioncognitive@gmail.com</a>
            <a href="#"> <i className="fas fa-envelope"></i> noraizamaan150303@gmail.com </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> VIT Bhopal University, Sehore , Madhya Pradesh - 466114 </a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
            <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
        </div>

    </div>

    <div className="credit"> created by <span>Team Cognion</span> | all rights reserved </div>

</section>
</>
  );
}

export default App;
