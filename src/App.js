import logo from './logo.svg';
import React from 'react'
import { useEffect , useState } from 'react'
import './App.css';

function App() {
const [sudoku , setsudoku] = useState([]);
const [dataFetched, setDataFetched] = useState(false);
function updateSudokuUI(grid) {
  
  for (let i = 0; i < 81; i++) {
    const divs = document.getElementById(i);
    const value = grid[Math.floor(i / 9)][i % 9];
    divs.innerHTML = value;
  }
}

function scratch(grid) {
  
  for (let i = 0; i < 81; i++) {
    const divs = document.getElementById(i);
    const value = grid[Math.floor(i / 9)][i % 9];
    if (value !== 0) {
      divs.innerHTML = value;
    } else {
      divs.innerHTML = ''; // Clear the cell content for empty cells
    }
    
  }
}



  const sudoapi = async ()=>{
  

      try {
        const res = await fetch('https://sudoku-api.vercel.app/api/dosuku' , {
          method:"GET", 
          
        })
        
        const data = await res.json();
        console.log(data.newboard.grids[0].value);
        setsudoku(data.newboard.grids[0].value);
        setDataFetched(true);
        console.log(typeof(data.newboard.grids[0].value[0][0]))
        if(!res.status===200  ){
          console.log('bc');
          const error = new Error(res.error);
          throw error;
      }
        
      } catch (error) {
        console.log(error);
      }
  }

  function check(a, b, k, grid) {
    for (let i = 0; i < 9; i++) {
      if (grid[a][i] == k) return false;
    }
    for (let i = 0; i < 9; i++) {
      if (grid[i][b] == k) return false;
    }
    
    for (let i = Math.floor(a / 3) * 3; i < Math.floor(a / 3) * 3 + 3; i++) {
      for (let j = Math.floor(b / 3) * 3; j < Math.floor(b / 3) * 3 + 3; j++) {
      if (grid[i][j] == k) return false;
      }
    }
    return true;
    }
    
    let ans = false;
  
  function SudokuSolver(i, j , grid) {
  
    if (ans) return;
    if (i == 9) {
      ans = true;
      // FillBoard(grid);
      console.log(grid);
      return;
    }
    if (j == 9) {
      SudokuSolver(i + 1, 0, grid);
    } else {
      if (grid[i][j] === 0) {
      for (let k = 1; k <= 9; k++) {
        if (check(i, j, k, grid)) {
        grid[i][j] = k;
        SudokuSolver(i, j + 1, grid);
        if (ans) return;
        grid[i][j] = 0;
        }
      }
      return;
      }
      if (grid[i][j] !== 0) {
      SudokuSolver(i, j + 1, grid);
      if (ans) return;
      }
    }
  
  
    
  }
  useEffect(() => {
    if (sudoku.length > 0) {
      scratch([...sudoku]);
    }
  }, [sudoku]);


  
  return (
    <>
      <div class="sudoku_grid">
        <div id="0" class="box1 bl bt"></div>
        <div id="1" class="box1 bt"></div>
        <div id="2" class="box1 br bt"></div>
        <div id="3" class="box2 bt"></div>
        <div id="4" class="box2 bt"></div>
        <div id="5" class="box2 br bt"></div>
        <div id="6" class="box3 bt"></div>
        <div id="7" class="box3 bt"></div>
        <div id="8" class="box3 br bt"></div>
        <div id="9" class="box1 bl"></div>
        <div id="10" class="box1"></div>
        <div id="11" class="box1 br"></div>
        <div id="12" class="box2"></div>
        <div id="13" class="box2"></div>
        <div id="14" class="box2 br"></div>
        <div id="15" class="box3"></div>
        <div id="16" class="box3"></div>
        <div id="17" class="box3 br"></div>
        <div id="18" class="box1 bb bl"></div>
        <div id="19" class="box1 bb"></div>
        <div id="20" class="box1 br bb"></div>
        <div id="21" class="box2 bb"></div>
        <div id="22" class="box2 bb"></div>
        <div id="23" class="box2 br bb"></div>
        <div id="24" class="box3 bb"></div>
        <div id="25" class="box3 bb"></div>
        <div id="26" class="box3 bb br"></div>
        <div id="27" class="box1 bl"></div>
        <div id="28" class="box1"></div>
        <div id="29" class="box1 br"></div>
        <div id="30" class="box2"></div>
        <div id="31" class="box2"></div>
        <div id="32" class="box2 br"></div>
        <div id="33" class="box3"></div>
        <div id="34" class="box3"></div>
        <div id="35" class="box3 br"></div>
        <div id="36" class="box1 bl"></div>
        <div id="37" class="box1"></div>
        <div id="38" class="box1 br"></div>
        <div id="39" class="box2"></div>
        <div id="40" class="box2"></div>
        <div id="41" class="box2 br"></div>
        <div id="42" class="box3"></div>
        <div id="43" class="box3"></div>
        <div id="44" class="box3 br"></div>
        <div id="45" class="box1 bb bl"></div>
        <div id="46" class="box1 bb"></div>
        <div id="47" class="box1 br bb"></div>
        <div id="48" class="box2 bb"></div>
        <div id="49" class="box2 bb"></div>
        <div id="50" class="box2 br bb"></div>
        <div id="51" class="box3 bb"></div>
        <div id="52" class="box3 bb"></div>
        <div id="53" class="box3 bb br"></div>
        <div id="54" class="box1 bl"></div>
        <div id="55" class="box1"></div>
        <div id="56" class="box1 br"></div>
        <div id="57" class="box2"></div>
        <div id="58" class="box2"></div>
        <div id="59" class="box2 br"></div>
        <div id="60" class="box3"></div>
        <div id="61" class="box3"></div>
        <div id="62" class="box3 br"></div>
        <div id="63" class="box1 bl"></div>
        <div id="64" class="box1"></div>
        <div id="65" class="box1 br"></div>
        <div id="66" class="box2"></div>
        <div id="67" class="box2"></div>
        <div id="68" class="box2 br"></div>
        <div id="69" class="box3"></div>
        <div id="70" class="box3"></div>
        <div id="71" class="box3 br"></div>
        <div id="72" class="box1 bb bl"></div>
        <div id="73" class="box1 bb"></div>
        <div id="74" class="box1 br bb"></div>
        <div id="75" class="box2 bb"></div>
        <div id="76" class="box2 bb"></div>
        <div id="77" class="box2 br bb"></div>
        <div id="78" class="box3 bb"></div>
        <div id="79" class="box3 bb"></div>
        <div id="80" class="box3 bb br"></div>
    </div>

    <div class="Buttons">
        <button id="GetPuzzle" onClick = {()=>{sudoapi();}}> GetPuzzle </button>
        
        <button id="SolvePuzzle" onClick={()=>{SudokuSolver(0, 0 , sudoku); updateSudokuUI(sudoku) }}> SolvePuzzle </button>
    </div>
    </>
  );
}

export default App;
