let i = 0;
while (i < 6) {
    i++;
    if (i === 2){
        continue; // salta a la siguiente iteracion
    }
    if (i === 4){
        break; // sale del ciclo
    }
    console.log(1);
}