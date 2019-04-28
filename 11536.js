let UserInput=[2,10,1,3,4,5,6,7,8,9,20,30,67,100];
let length=UserInput.length;
let frequency=0;
let x=0;
let ListInputChange;
let ListInput2Change=1;
ListInputChange=UserInput[0];
function process(){
  if(ListInputChange==-1){
    return;
  }
  for(i=0;i<ListInputChange;i++){
    if(ListInputChange>ListInput2Change){
      for(k=0;k<=(ListInputChange-ListInput2Change);k++){
          ListInput2Change=ListInput2Change*2;
          frequency++;
        if(ListInput2Change==UserInput[0]){
            x++;
            console.log('Case'+x+':'+frequency);
            removed = UserInput.splice(0,1);
            frequency=0;
            ListInput2Change=1;
            ListInputChange=UserInput[0];
        }
        else if((ListInputChange-ListInput2Change)<ListInput2Change){
            frequency++;
            x++;
            console.log('Case'+x+':'+frequency);
            removed = UserInput.splice(0,1);
            frequency=0;
            ListInput2Change=1;
            ListInputChange=UserInput[0];
        }
      }
    }
    else if(ListInputChange==1){
      x++;
      console.log('Case'+x+':'+frequency);
      removed = UserInput.splice(0,1);
      frequency=0;
      ListInput2Change=1;
      ListInputChange=UserInput[0];
    }
  }
}

for(j=0;j<length;j++){
  process();
}

