import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    TextField,
    Button,
    Paper,
    Typography,
    Stack
} from "@mui/material";

import {
    addCourse,
    updateCourse
} from "/redux/courseSlice";

function CourseForm({ editingCourse, setEditingCourse }) {

    const dispatch = useDispatch();

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [credits, setCredits] = useState("");

    useEffect(() => {

        if (editingCourse) {

            setCode(editingCourse.code);
            setName(editingCourse.name);
            setInstructor(editingCourse.instructor);
            setCredits(editingCourse.credits);

        } else {

            setCode("");
            setName("");
            setInstructor("");
            setCredits("");
        }

    }, [editingCourse]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!code || !name || !instructor || !credits) {
            alert("Please fill all course details.");
            return;
        }

        const courseData = {
            code,
            name,
            instructor,
            credits: Number(credits)
        };

        if (editingCourse) {

            dispatch(
                updateCourse({
                    id: editingCourse.id,
                    ...courseData
                })
            );

            setEditingCourse(null);

        } else {

            dispatch(addCourse(courseData));
        }

        setCode("");
        setName("");
        setInstructor("");
        setCredits("");
    };

    const handleCancel = () => {

        setEditingCourse(null);

        setCode("");
        setName("");
        setInstructor("");
        setCredits("");
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 3,
                marginBottom: 4
            }}
        >

            <Typography
                variant="h5"
                gutterBottom
            >
                {editingCourse
                    ? "Edit Course"
                    : "Add New Course"}
            </Typography>

            <form onSubmit={handleSubmit}>

                <Stack spacing={2}>

                    <TextField
                        label="Course Code"
                        value={code}
                        onChange={(e) =>
                            setCode(e.target.value)
                        }
                        fullWidth
                    />

                    <TextField
                        label="Course Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        fullWidth
                    />

                    <TextField
                        label="Instructor"
                        value={instructor}
                        onChange={(e) =>
                            setInstructor(e.target.value)
                        }
                        fullWidth
                    />

                    <TextField
                        label="Credits"
                        type="number"
                        value={credits}
                        onChange={(e) =>
                            setCredits(e.target.value)
                        }
                        fullWidth
                    />

                    <Stack
                        direction="row"
                        spacing={2}
                    >

                        <Button
                            type="submit"
                            variant="contained"
                        >
                            {editingCourse
                                ? "Update Course"
                                : "Add Course"}
                        </Button>

                        {editingCourse && (
                            <Button
                                variant="outlined"
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        )}

                    </Stack>

                </Stack>

            </form>

        </Paper>
    );
}

export default CourseForm;