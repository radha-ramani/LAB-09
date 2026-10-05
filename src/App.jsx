import { useState } from "react";

import {
    Container,
    AppBar,
    Toolbar,
    Typography
} from "@mui/material";

import CourseForm from "/components/CourseForm";
import CourseTable from "/components/CourseTable";

function App() {

    const [editingCourse, setEditingCourse] = useState(null);

    return (
        <>
            <AppBar position="static">

                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                    >
                        Course Management Dashboard
                    </Typography>

                </Toolbar>

            </AppBar>

            <Container
                maxWidth="lg"
                sx={{ marginTop: 4 }}
            >

                <CourseForm
                    editingCourse={editingCourse}
                    setEditingCourse={setEditingCourse}
                />

                <CourseTable
                    setEditingCourse={setEditingCourse}
                />

            </Container>
        </>
    );
}

export default App;