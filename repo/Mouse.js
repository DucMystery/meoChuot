function Rat(name,weight,speed) {
    this.name = name;
    this.weight =weight;
    this.speed =speed;
    this.status=true;

    this.sounding = function () {
        alert("Chít Chít");
    }

}