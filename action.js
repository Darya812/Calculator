const numbers = document.querySelectorAll('.number'),
operations = document.querySelectorAll('.math-operation'),
decimalBtn = document.getElementById('decimal'),
clearBtns = document.querySelectorAll('.clear-btn'),
equalBtn = document.getElementById('equal'),
display = document.getElementById('display');
let MemoryCurrentNumber = 0,
MemoryNewNumber = false,
MemoryPendingOperation = '';


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
            operation(e.target.textContent);
    });
};

for (let  i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
};

decimalBtn.addEventListener('click',  decimal);
equalBtn.addEventListener('click', equal);

function numberPress(number){
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
         if (display.value === '0') {
        display.value = number;
    } else {
    display.value += number;
    };
};
};

function operation(op){
    let localOperationMemory = display.value;
  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
      display.value = MemoryCurrentNumber;
  } else {
      MemoryNewNumber = true;
      if (MemoryPendingOperation === '+') {
          MemoryCurrentNumber += parseFloat(localOperationMemory);
      } else if (MemoryPendingOperation === '-') {
        MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/') {
        MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '*') {
        MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else {
        MemoryCurrentNumber = parseFloat(localOperationMemory);
    };
            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = op
  };
};

function decimal(argument){
    let localDecimaMemory = display.value;
    if (MemoryNewNumber) {
        localDecimaMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimaMemory.indexOf('.') === -1) {
        localDecimaMemory += '.';
        };
    };
        display.value = localDecimaMemory;
};

function clear(id) {
    if (id === 'CE') {
        display.value ='0';
        MemoryNewNumber = true;
    } else if (id === 'C') {
        display.value ='0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    };
};
