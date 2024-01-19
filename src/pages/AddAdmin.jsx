import { useEffect, useState } from "react";
import "./Add.css";

export default function AddCourses() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const [updateData, setUpdateData] = useState({
        title: '',
        price: '',
        image: '',
      });

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

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setimage] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeImage = (e) => {
        setimage(e.target.value);
    }
    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleAddCourse = async () => {
        try {
            if (!title || !price || !image) {
                console.error("Veuillez remplir tous les champs.");
                return;
            }
    
            const response = await fetch("http://localhost:5000/Add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    price,
                    image,
                }),
            });
    
            if (response.ok) {
                setLoading(true);
                setShowPopup(false);
            } else {
                console.error("Failed to add course");
            }
        } catch (error) {
            console.error("Error adding course:", error);
        }
    }

    const handleDelete = async (index) => {
        try {
            const response = await fetch(`http://localhost:5000/delete/${index}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setLoading(true);
            } else {
                console.error("Failed to delete course");
            }
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    }

    const handleUpdateClick = (index) => {
        const selectedCourse = courses[index];
        setUpdateData({
            title: selectedCourse.title,
            price: selectedCourse.price,
            image: selectedCourse.image,
        });
        setUpdateIndex(index);
        setShowUpdatePopup(true);
    };
    
    
    const [updateIndex, setUpdateIndex] = useState(null); // Ajoutez cet état
    
 
const handleUpdateCourse = async () => {
    try {
        // Vérifier si les champs ne sont pas vides
        if (!updateData.title || !updateData.price || !updateData.image) {
            console.error("Veuillez remplir tous les champs.");
            return;
        }

        if (updateIndex !== null) {
            const response = await fetch(`http://localhost:5000/update/${updateIndex}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            });

            if (response.ok) {
                setLoading(true);
                setShowUpdatePopup(false);
            } else {
                console.error("Failed to update course");
            }
        }
    } catch (error) {
        console.error("Error updating course:", error);
    }
};
    

    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(!showPopup);
    }



    return (
        <div>
            <button className="buttonpop" onClick={handleClick}> ADD Courses</button>

            <table>
                <thead>
                    <tr>
                        <th>Supprimer</th>
                        <th>update</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>URL</th>

                    </tr>
                </thead>
                <tbody>
                    {!isLoading ? courses.map((course, index) => (
                        <tr key={index}>
                            <td><a onClick={() => handleDelete(index)}>Supprimer</a></td>
                            <td><a onClick={() => handleUpdateClick(index)}>update</a></td>
                            <td>{course.title}</td>
                            <td>{course.price}</td>
                            <td>{course.image}</td>

                        </tr>
                    )) : <>loading ...</>}
                </tbody>
            </table>

            <div className={`PopAdd ${showPopup ? 'visible' : 'hidden'}`}>
                <h2>FORM</h2>
                <div className="titlePop">
                    <input required className="InputPop" id="titre" type="text" placeholder="Titre" onChange={handleChangeTitle} value={title} /> <br /><br />
                    <input required className="InputPop" id="urlImage" type="text" placeholder="Url" onChange={handleChangeImage} value={image}  /> <br /><br />
                    <input  required className="InputPop" id="prix" type="text" placeholder="Prix" onChange={handleChangePrice} value={price}  /> <br /><br />
                </div>
                <button type="text" className="buttonpopp" onClick={handleAddCourse}>Add Courses </button>
            </div>

            <div className={`UpdatePop ${showUpdatePopup ? 'visible' : 'hidden'}`}>
                <h2>Update FORM</h2>
                <div className="titlePop">
                    <input className="InputPop" id="updateTitle" type="text" placeholder="Titre" value={updateData.title} onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })} required />
                    <br /><br />
                    <input className="InputPop" id="updateImage" type="text" placeholder="Url" value={updateData.image} onChange={(e) => setUpdateData({ ...updateData, image: e.target.value })} required/>
                    <br /><br />
                    <input className="InputPop" id="updatePrice" type="text" placeholder="Prix" value={updateData.price} onChange={(e) => setUpdateData({ ...updateData, price: e.target.value })} required/>
                    <br /><br />
                </div>
                <button type="text" className="buttonpopp" onClick={handleUpdateCourse}>Update Course </button>
            </div>


        </div>
    );
}
