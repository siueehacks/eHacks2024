import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { ref, getDownloadURL, getBlob } from "firebase/storage";
import {storage, db, auth} from "../firebaseConfig.js";
import { Flex, Center, Button, Text, Table, TableContainer, Tr, Th, Td } from "@chakra-ui/react";
import "./Home.css";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [tableData, setTableData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const properties = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    submissionTime: "Submission Date",
  };

  
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const collectionRef = collection(db, "registrations");
      const registrationSnap = await getDocs(collectionRef);
      setTableData(registrationSnap.docs.map((doc) => doc.data()));
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  }

  async function downloadConsent(resume, mode) {
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
        csvString += `"${doc[key]}",`;
      });
      csvString += "\n";
    });
    const blob = new Blob([csvString], { name: "SheCode Registrations", type: "text/csv" });
    const url = URL.createObjectURL(blob);
    console.log(url)
    window.location.href = url;
  }

  const TableHeader = () => {
    return (
      <Tr>
        {Object.values(properties).map((property) => (
          <Th color="white">{property}</Th>
        ))}
        <Th color="white">Download Consent</Th>
      </Tr>
    );
  };

  function displayProperties(props) {
    console.log(props)
    return Object.keys(properties).map((key) => (
      <Td>{props.doc[key]}</Td>
    ));
  }

  const DataRow = (props) => {
    return (
      <Tr>
        {displayProperties(props)}
        <Td>
          <Button variant="outline" maxh="2vmin" onClick={() => downloadConsent(props.doc.resume, 0)}>Open</Button>
          {/*<div onClick={() => downloadConsent(props.doc.resume, 1)}>Download</div>*/}
        </Td>
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
    return tableData.map((doc) => (
      <DataRow doc={doc} />
    ));
  }

  return (
    <div className="Page">
      <div className="ContentBox">
      <Button mt="2vh" variant="outline" onClick={downloadCSV}>Download CSV</Button>
        <Center>
          <Flex direction="column" align="center">
            <Text color="red.500">{error}</Text>
            <TableContainer justify="center" maxW="70vw">
              <Table variant='striped'>
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
