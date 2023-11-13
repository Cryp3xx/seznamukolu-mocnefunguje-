const listname =[]
const listdesc =[]
function addtasktolist() {
    const tname = document.getElementById("taskname").value;
    const tdesc = document.getElementById("taskdescription").value;

    listname.push(tname)
    listdesc.push(tdesc)

    const listnameresult = listname.join('<br>');
    const listdescresult = listdesc.join('<br>');

    document.getElementById("tasklog").innerHTML = listnameresult + " " + listdescresult;

    console.log(listname, listdesc)
}
