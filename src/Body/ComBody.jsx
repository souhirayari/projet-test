
import "./BodyStyle.css"
import { useState, useEffect } from "react";

export default function ComBody() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (isLoading) {
            getCourses()
        }
    }, [isLoading])

    async function getCourses() {
        const response = await fetch("http://localhost:5000/");
        const courses = await response.json();
        setLoading(false)
        setCourses(courses)
        console.log(courses);
    }

    return (
        <div className="Container">
            <div className="TitreBody">
                <h2 className="h2Body">Discover Our Courses</h2>
                <input type="submit" value={"View More"} />
            </div>
            <div className="boxes">
                {!isLoading ? courses.map((course, index) => (
                    <div className="box">
                        <div className="box-content" key={index}>
                            <img src={course.image} alt="image" />
                            <div className="box-info">
                                <h2 className="desc">{course.title}</h2>
                                <h3>{course.price} / Month</h3>
                            </div>
                        </div>
                    </div>
                )) : <>loading ...</>}
            </div>
        </div>
    )

}