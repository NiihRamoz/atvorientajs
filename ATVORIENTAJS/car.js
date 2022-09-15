class car{
motor;
#nitro = 'STUTUTUTU (Turbina)';

set motor(motor){

    this.motor = motor
}

get motor(){

    return this.motor

}

    constructor(motor){
        
        this.motor = motor;
        
    }   
    acelerarCORVETTE(){
        return "CORVETTE: Vrummm....";
    } 
    acelerarOPALLA(){
        return `OPALLA: VRUMMMMMMMMM!!!....${this.#nitro}` ;

    }
    acelerarMAVERICK(){
        return "MAVERICK: VRUMMMMM!!...";
    }
}
