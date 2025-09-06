import React from 'react'
import './Testimonials.css'

const Testimonials = () => {

    const cards = [
    { id: 1, name: "Rohan Mehta", text: "Webmok ka digital marketing course truly amazing hai! 🚀 AI tools, graphic designing aur video editing modules ne meri skills kaafi upgrade kar di. @webmok ka approach bilkul practical aur engaging hai!" },
    { id: 2, name: "Priya Sharma", text: "Loved the course! Video editing aur social media strategies itni easy aur fun ho gayi. 🤩 ThankYou So Much" },
    { id: 3, name: "Amit Verma", text: "@Webmok ka AI in marketing module absolutely game-changer tha. Learned so many advanced techniques jo maine kahi aur nahi dekhe. 💡 Video editing aur graphic designing tutorials bhi top notch!" },
    { id: 4, name: "Neha Kapoor", text: "Course ka content detailed aur practical hai. 🌟 Har module me real world examples diye gaye hai, especially graphic designing aur AI tools section. Definitely worth every penny!" },
    { id: 5, name: "Siddharth Jain", text: "Amazing faculty and extremely supportive environment. 💯 Video editing modules were very engaging, aur social media marketing tips are also good aur Internship me bhi maine bahut kuch sikha, Experience gai kiya which helps me alot" },
    { id: 6, name: "Anjali Singh", text: "I just Loved Webmok's Digital Marketing Course! 😍 AI aur design skills dono improve hui aur practical exercises ne learning ka experience super interactive banaya. Perfect for anyone yo make his career in This Digital Marketing field." },
    { id: 7, name: "Karan Reddy", text: "This course helped me boost my freelance career! 🚀 Learned digital marketing, video editing, aur AI strategies efficiently. @webmok ke instructors ka support really helpful tha." },
    { id: 8, name: "Simran Kaur", text: "@Webmok ke instructors bahut helpful hain. 💖 Har lesson easy to follow aur interactive hai!" },
    { id: 9, name: "Vivek Patel", text: "Absolutely worth it! 🔥 AI tools in marketing section really gave me an edge over competitors. Webmok ka teaching style engaging aur beginner-friendly hai. Highly recommended!" },
    { id: 10, name: "Tanya Gupta", text: "Course structure bahut organized hai aur practical exercises se confidence kaafi increase hua. 🙌 Video editing aur AI ka combo best hai! Special thanks to @rahishsangwan for guidance." },
    {id: 11, name: "Bhuwan Suneja", text: "Thanks alot to webmok and specially Rahish Sir which helps me alot, offered me an intenship to grow and learn more new skills"}
];




  return (
    <div className='testimonial'>
    <div className="testimonial-header">
        <h3>Our Testimonials</h3>
        <p>Hear from the voices that matter most. Our community of learners share how their journeys were transformed through dedication, innovation, and the right guidance.</p>
    </div>

    <div className="testimonials">
        {cards.map((card)=>(
            <div className="test-card" key={card.id}>
                <p>{card.text}</p>
                <div className="profile">
                    <img src="" alt="" />
                    <h4>{card.name}</h4>
                </div>
            </div>
        ))}
    </div>
</div>
    
  )
}

export default Testimonials