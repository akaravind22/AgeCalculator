import { useState } from "react";

function AgeCalculator() {
    const [dob, setDob] = useState("");
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (!dob) {
            alert("Please select your date of birth");
            return;
        }

        const birthDate = new Date(dob);
        const today = new Date();

        let calculatedAge =
            today.getFullYear() - birthDate.getFullYear();

        const monthDifference =
            today.getMonth() - birthDate.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 &&
                today.getDate() < birthDate.getDate())
        ) {
            calculatedAge--;
        }

        setAge(calculatedAge);
    };

    return (
        <div className="container">
            <h1>Age Calculator</h1>

            <p>Calculate your age from your date of birth</p>

            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />

            <br />

            <button onClick={calculateAge}>
                Calculate Age
            </button>

            {age !== null && (
                <div className="result">
                    <h2>Your Age</h2>
                    <h1>{age} Years</h1>
                </div>
            )}
        </div>
    );
}

export default AgeCalculator;