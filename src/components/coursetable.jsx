import { useSelector, useDispatch } from "react-redux";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography
} from "@mui/material";

import {
    Edit,
    Delete
} from "@mui/icons-material";

import {
    deleteCourse
} from "/redux/courseSlice";

function CourseTable({ setEditingCourse }) {

    const courses = useSelector(
        state => state.courses.courses
    );

    const dispatch = useDispatch();

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (confirmDelete) {
            dispatch(deleteCourse(id));
        }
    };

    return (
        <div>

            <Typography
                variant="h5"
                sx={{ marginBottom: 2 }}
            >
                Available Courses
            </Typography>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>
                                <strong>Code</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Course Name</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Instructor</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Credits</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Actions</strong>
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {courses.map((course) => (

                            <TableRow key={course.id}>

                                <TableCell>
                                    {course.code}
                                </TableCell>

                                <TableCell>
                                    {course.name}
                                </TableCell>

                                <TableCell>
                                    {course.instructor}
                                </TableCell>

                                <TableCell>
                                    {course.credits}
                                </TableCell>

                                <TableCell>

                                    <Button
                                        color="primary"
                                        startIcon={<Edit />}
                                        onClick={() =>
                                            setEditingCourse(course)
                                        }
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        color="error"
                                        startIcon={<Delete />}
                                        onClick={() =>
                                            handleDelete(course.id)
                                        }
                                    >
                                        Delete
                                    </Button>

                                </TableCell>

                            </TableRow>

                        ))}

                    </TableBody>

                </Table>

            </TableContainer>

        </div>
    );
}

export default CourseTable;