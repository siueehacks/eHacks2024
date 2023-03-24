import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebaseConfig.js";
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
import "./Home.css";

const Dashboard = () => {
  const [tableData, setTableData] = useState(null);
  const [error, setError] = useState("");

  const properties = {
    submissionTime: "Submission Date",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    guardianFirstName: "Guardian First Name",
    guardianLastName: "Guardian Last Name",
    guardianEmail: "Guardian Email",
    guardianPhone: "Guardian Phone",
    allergies: "Allergies",
  };

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const collectionRef = collection(db, "registrations");
      const registrationSnap = await getDocs(collectionRef);
      setTableData(registrationSnap.docs);
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  }

  async function deleteEntry(doc) {
    try {
      await deleteDoc(doc.ref);
      loadData();
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  }

  async function downloadConsent(waiver, mode) {
    try {
      const storageRef = ref(storage, `waivers/${waiver}`);
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
    const blob = new Blob([csvString], {
      name: "SheCode Registrations",
      type: "text/csv",
    });
    const url = URL.createObjectURL(blob);
    console.log(url);
    window.location.href = url;
  }

  const TableHeader = () => {
    return (
      <Tr>
        <Th />
        <Th color="white">Consent</Th>
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
          <Button variant="outline" size="xs" onClick={() => setModal(true)}>
            Delete
          </Button>
        </Td>
        <Td>
          <Button
            variant="outline"
            size="xs"
            onClick={() => downloadConsent(doc.waiver, 0)}
          >
            Open
          </Button>
          {/*<div onClick={() => downloadConsent(props.doc.waiver, 1)}>Download</div>*/}
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
      <div className="ContentBox">
        <Flex justify="left" ml="2vw">
          <Button
            mt="2vh"
            variant="outline"
            onClick={downloadCSV}
          >
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
