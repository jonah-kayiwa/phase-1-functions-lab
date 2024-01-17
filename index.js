// Function to calculate the distance from Scuber headquarters in blocks
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42; //scuber headquarters on 42nd street
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet (block){
    const headQuarter=42;
    const pickupLocation=block;
    return Math.abs((headQuarter - pickupLocation))*264;
}
function distanceTravelledInFeet(start, destination){
    const blockLength = 264;
    return Math.abs(destination - start)*blockLength;
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    const distanceFree = distance <= 400;
    if (distanceFree){
        return 0
    }else if(distance>400 && distance<=2000){
        return (distance -400)*0.02
    }else if(distance>2000 && distance<=2500){
        return 25
    }else if(distance>2500){
        return ("cannot travel that far")
    }
}    
