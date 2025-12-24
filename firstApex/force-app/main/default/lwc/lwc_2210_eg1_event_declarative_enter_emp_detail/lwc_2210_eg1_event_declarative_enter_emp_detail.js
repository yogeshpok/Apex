import { LightningElement } from 'lwc';

export default class Lwc_2210_eg1_event_declarative_enter_emp_detail extends LightningElement {

    Name;
    Age;
    Salary;
    Birth;

    CapName(event)
    {
       this.Name =event.target.value;
    }
    CapAge(event)
    {
        this.Age =event.target.value;

    }
    CapSalary(event)
    {
        this.Salary =event.target.value;

    }
    CapDOb(event)
    {
        this.Birth =event.target.value;

    }

    Subme(event)
    {
        this.dispatchEvent(new CustomEvent('evtemp',{detail:{Nm : this.Name,Ag : this.Age,Sl :this.Salary,DB:this.Birth}}));
    }
}