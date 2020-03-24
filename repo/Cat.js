let Cat = function (name,weight,speed) {
    this.name = name;
    this.weight =weight;
    this.speed =speed;
    this.status=true;

    this.sounding = function () {
        alert("Meo");
    }

    this.duoiChuot = function (rat) {
        if (rat.speed < this.speed){
            rat.status=false;
            console.log(this.name+" Bat Duoc "+rat.name);
            this.weight += rat.weight;
            console.log(this.weight);
        }
    }
}