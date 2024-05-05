import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  // We use use effect to fetch the local API 
// It is basically like js where we fetch and use .then 
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  //function to handle the new transanction 
  function addTransaction(transaction) {
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  }

  // Function for the handle search 
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (term) => {
      setSearchTerm(term);
    };
  
  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;