var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="Larry";
names[7]="Paula";
names[8]="Laura";
names[9]="Jim";

for(var i=0; i<names.length; i++)
{
   if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j')
   {
   	console.log("Goodbye "+names[i])
   }
   else
   {
   	console.log("Hello "+names[i])
   }
}