import JerseyCard from './JerseyCard'
import {useState, useEffect} from 'react'

//TODO: KEEP TRACK OF FILTERING STATE

function Jerseys(props) {
    const {jerseyData, addCart, removeCart} = props
    const [sortedData, setSortedData] = useState(jerseyData);
    const [sorting, setSorting] = useState("None");
    const [team, setTeam] = useState("Both");
    const [status, setStatus] = useState("Both");


    const sortJerseysDescending = () => {
      const sorted = sortedData.sort((a, b) => b.price - a.price);
      setSorting("Descending")
      setSortedData([...sorted]);
    }

    const sortJerseysAscending = () => {
      const sorted = sortedData.sort((a, b) => a.price - b.price);
      setSorting("Ascending")
      setSortedData([...sorted]);
    }

    const sortJerseysDefault = () => {
      const sorted = sortedData.sort((a, b) => a.id - b.id);
      setSorting("None")
      setSortedData([...sorted]);
    }

    const onlyRedSox = () => {
      const soxOnly = jerseyData.filter(element => element.team === 'Red Sox')

      //preserve sorting
      var sorted = soxOnly;
      if(sorting === "Ascending"){
        sorted = soxOnly.sort((a, b) => a.price - b.price);
      } else if (sorting === "Descending") {
        sorted = soxOnly.sort((a, b) => b.price - a.price);
      }

      var filtered = sorted;
      //preserve active/retired
      if(status === "Active") {
        filtered = sorted.filter(element => element.status === 'active')
      } else if (status === "Retired") {
        filtered = sorted.filter(element => element.status === 'retired')
      }

      setTeam("Red Sox")
      setSortedData([...filtered])
    }

    const onlyYankees = () => {
      const yankeesOnly = jerseyData.filter(element => element.team === 'Yankees')

      //preserve sorting
      var sorted = yankeesOnly;
      if(sorting === "Ascending"){
        sorted = yankeesOnly.sort((a, b) => a.price - b.price);
      } else if (sorting === "Descending") {
        sorted = yankeesOnly.sort((a, b) => b.price - a.price);
      }

      var filtered = sorted;
      //preserve active/retired
      if(status === "Active") {
        filtered = sorted.filter(element => element.status === 'active')
      } else if (status === "Retired") {
        filtered = sorted.filter(element => element.status === 'retired')
      }

      setTeam("Yankees")
      setSortedData([...filtered])
    }

    const onlyActive = () => {
      const activeOnly = jerseyData.filter(element => element.status === 'active')

      //preserve sorting
      var sorted = activeOnly;
      if(sorting === "Ascending"){
        sorted = activeOnly.sort((a, b) => a.price - b.price);
      } else if (sorting === "Descending") {
        sorted = activeOnly.sort((a, b) => b.price - a.price);
      }

      var filtered = sorted;
      if(team === "Yankees") {
        filtered = sorted.filter(element => element.team === 'Yankees')
      } else if (team === "Red Sox") {
        filtered = sorted.filter(element => element.team === 'Red Sox')
      }

      setStatus("Active")
      setSortedData([...filtered]);
    }

    const onlyRetired = () => {
      const retiredOnly = jerseyData.filter(element => element.status === 'retired')

      //preserve sorting
      var sorted = retiredOnly;
      if(sorting === "Ascending"){
        sorted = retiredOnly.sort((a, b) => a.price - b.price);
      } else if (retiredOnly === "Descending") {
        sorted = retiredOnly.sort((a, b) => b.price - a.price);
      }

      var filtered = sorted;
      if(team === "Yankees") {
        filtered = sorted.filter(element => element.team === 'Yankees')
      } else if (team === "Red Sox") {
        filtered = sorted.filter(element => element.team === 'Red Sox')
      }

      setStatus("Active")
      setSortedData([...filtered]);
    }


    const showAll = () => {
      const all = jerseyData.sort((a, b) => a.id - b.id);

      setStatus("Both")
      setTeam("Both")
      setSorting("None")
      setSortedData([...all]);
    }

    

    return (
        <div className="Container">
          <div className="head">
            <h1>Jersey Shop</h1>
            <h3>Welcome to my Jersey Store! You can filter and sort using the buttons</h3>
          </div>
          <div>
              <h2>Filters:</h2>
              <div className="Filters">

                <div>
                  Filter by Price:     
                  <button onClick={sortJerseysAscending}>Ascending</button>
                  <button onClick={sortJerseysDescending}>Descending</button>
                  <button onClick={sortJerseysDefault}>Default</button>
                </div>
                <div>
                  Filter by Team:
                  <button onClick={onlyRedSox}>Red Sox</button>
                  <button onClick={onlyYankees}>Yankees</button>
                </div>
                <div>
                  Filter by Active/Retired:
                  <button onClick={onlyActive}>Active Only</button>
                  <button onClick={onlyRetired}>Retired Only</button>
                </div>
                <button onClick={showAll}>Reset all Filters</button>
              </div>
 
          </div>
          <div className="jersey-wrapper">

            {sortedData.map((item, index) => (
              <JerseyCard item={item} addCart={addCart} removeCart={removeCart} key={item.id}/>
            ))}
          </div>
        </div>
    )
}

export default Jerseys