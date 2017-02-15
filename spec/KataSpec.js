describe("Kata tests", function() {  

  beforeEach(function() {    
  });

  it("should be able to launch the tests environment (Test environment is working ok).", function() {
    
    expect(true).toBeTruthy();
  });

  it("should pass a solved sudoku (Test puzzle and solution comparison using JSON.stringify).", function() {
    
    var puzzle = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]],      
    solution = puzzle;   

    result = JSON.stringify(sudoku(puzzle));
    expected= JSON.stringify(solution);
    
    expect(result).toBe(expected,'Incorrect solution when trying to solve a solved sudoku.'); 
  }); 

  it("should be able to pass the example test number1.", function() {
    
    var puzzle = [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]],

    solution = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]];
    

    result = JSON.stringify(sudoku(puzzle));
    expected= JSON.stringify(solution);

    expect(result).toBe(expected,'Incorrect solution.');    
  });

  describe ('availableValues', function (){
    var values, 
        result,
        expected,
        puzzle;

    beforeEach(function() {    
        values = [0,1,2,3,4,5,6,7,8,9];
        puzzle = [ //column, row
              [0,0,0,9,0,2,0,0,1],
              [0,1,2,1,9,5,0,0,0],
              [3,0,9,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [5,0,0,9,0,3,0,0,0],
              [0,0,0,1,2,8,0,0,0],
              [0,0,0,0,0,0,2,8,0],
              [8,0,0,4,1,9,0,3,0],
              [0,0,0,0,8,0,0,7,0]];
    });

    it('should return available values in the row when all values in column are 0.', function() {
    
      result = JSON.stringify(availableValues(puzzle, 8, 0, values));
      expected= JSON.stringify([3,4,5,6,7,8]);

      expect(result).toBe(expected);
    });

    it('should return available values in the column when all values in row are 0.', function() {
    
      result = JSON.stringify(availableValues(puzzle, 0, 3, values))
      expected= JSON.stringify([1,2,4,6,7,9]);

      expect(result).toBe(expected);
    });

    it('should return available values looking in column and row.', function() {
    
      result = JSON.stringify(availableValues(puzzle, 0, 0, values))
      expected= JSON.stringify([4,6,7]);

      expect(result).toBe(expected);
    });

    it('should return available values in the box case 1.', function() {
    
      result = JSON.stringify(availableValues(puzzle, 6, 6, values))
      expected= JSON.stringify([1,4,5,6,9]);

      expect(result).toBe(expected);
    });

    it('should return available values in the box case 2.', function() {
    
      result = JSON.stringify(availableValues(puzzle, 4, 5, values))
      expected= JSON.stringify([4,5,6,7]);

      expect(result).toBe(expected);
    });
  
  });
});