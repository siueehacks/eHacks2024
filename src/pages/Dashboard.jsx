import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { storage, db, auth } from "../firebaseConfig.js";
import {
  Flex,
  Center,
  Button,
  Text,
  Table,
  TableContainer,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal.jsx";
import { useNavigate } from "react-router-dom";
import Waves from "../components/Waves.jsx";
import "./Home.css";
import { changeCountBy } from "../data/firestoreOps.js";

const Dashboard = () => {
  const [tableData, setTableData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const properties = {
    submissionTime: "Submission Date",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    shirtSize: "Shirt Size",
    allergies: "Allergies",
    school: "Institution",
    schoolYear: "Year in School"
  };

  useEffect(() => {
    checkSignedIn();
    loadData();
  }, []);

  function checkSignedIn() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    })
  }

  function logout() {
    auth.signOut().then(() => {
      navigate("/login");
    }).catch((e) => {
      console.error('Sign out error');
    });
  }

  async function loadData() {
    try {
      const collectionRef = collection(db, "registrations");
      const registrationSnap = await getDocs(collectionRef);
      setTableData(registrationSnap.docs);
    } catch (e) {
      console.error(e);
      setError(e.message);
      navigate("/login");
    }
  }

  async function deleteEntry(doc) {
    try {
      await deleteDoc(doc.ref);
      changeCountBy(-1);
      loadData();
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  }

  async function downloadResume(resume, mode) {
    try {
      const storageRef = ref(storage, `resumes/${resume}`);
      //if (mode === 0){
      const url = await getDownloadURL(storageRef);
      window.open(url);
      /*}else{ BLOCKED BY CORS POLICY, LOW PRIORITY
        const blob = await getBlob(storageRef);
        const url = URL.createObjectURL(blob);
        window.location.href = url;
      }*/
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  }

  async function downloadCSV() {
    let csvString = "";
    Object.values(properties).forEach((property) => {
      csvString += `"${property}",`;
    });
    csvString += "\n";
    tableData.forEach((doc) => {
      Object.keys(properties).forEach((key) => {
        csvString += `"${doc.data()[key]}",`;
      });
      csvString += "\n";
    });
    console.log(csvString)
    const blob = new Blob([csvString], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "eHacksRegistrations.csv";
    a.click();
  }

  const TableHeader = () => {
    return (
      <Tr>
        <Th />
        <Th color="white">Resume</Th>
        {Object.values(properties).map((property) => (
          <Th color="white" fontSize="xs">
            {property}
          </Th>
        ))}
      </Tr>
    );
  };

  function displayProperties(doc) {
    console.log(doc);
    return Object.keys(properties).map((key) => <Td>{doc[key]}</Td>);
  }

  const DataRow = (props) => {
    const [modal, setModal] = useState(false);
    const doc = props.doc.data();
    return (
      <Tr>
        <Td>
          <Button variant="outline" colorScheme="red" size="xs" onClick={() => setModal(true)}>
            Delete
          </Button>
        </Td>
        <Td>
          <Button
            variant="outline"
            _hover={{ bg: '#969696' }}
            size="xs"
            onClick={() => downloadResume(doc.resume, 0)}
          >
            Open
          </Button>
          {/*<div onClick={() => downloadResume(props.doc.waiver, 1)}>Download</div>*/}
        </Td>
        {displayProperties(doc)}

        <ConfirmDeleteModal
          isOpen={modal}
          onClose={() => setModal(false)}
          deleteEntry={deleteEntry}
          doc={props.doc}
        />
      </Tr>
    );
  };

  function showRegistrations() {
    if (!tableData) {
      return <p>Loading...</p>;
    }
    if (tableData.length === 0) {
      return <p>No registrations yet!</p>;
    }
    return tableData.map((doc) => <DataRow doc={doc} />);
  }

  return (
    <div className="Page">
      <Waves />
      <div className="ContentBox">
        <Flex justify="left" ml="2vw">
          <Button mt="2vh" mr="1vw" _hover={{ bg: '#969696' }} variant="outline" onClick={logout}>
            Logout
          </Button>
          <Button mt="2vh" _hover={{ bg: '#969696' }} variant="outline" onClick={downloadCSV}>
            Download CSV
          </Button>
        </Flex>
        <Center>
          <Flex direction="column" align="center" w="95%">
            <Text color="red.500">{error}</Text>
            <TableContainer maxW="100%" mt="2vh" mb="4vmax">
              <Table variant="striped" size="sm">
                <TableHeader />
                {showRegistrations()}
              </Table>
            </TableContainer>
          </Flex>
        </Center>
      </div>
    </div>
  );
};

export default Dashboard;
