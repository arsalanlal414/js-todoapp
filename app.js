var list=document.getElementById("list")

function addcontact(){
    var name=document.getElementById('name').value
    var number=document.getElementById('number').value

    var trTag=document.createElement("tr")

    var nameTag=document.createElement("td")
    nameTag.setAttribute("class","nametag")
    var nameValue=document.createTextNode(name)
    nameTag.appendChild(nameValue)
    trTag.appendChild(nameTag)

    var numberTag=document.createElement("td")
    numberTag.setAttribute("class","numbertag")
    var numberValue=document.createTextNode(number)
    numberTag.appendChild(numberValue)
    trTag.appendChild(numberTag)

    var editTagTd=document.createElement("td")
    var editTag=document.createElement("button")
    editTag.setAttribute("class","edittag")
    editTag.setAttribute("onclick","editcontact(this)")
    var editValue=document.createTextNode("Edit")
    editTag.appendChild(editValue)
    editTagTd.appendChild(editTag)
    trTag.appendChild(editTagTd)

    var delTagTd=document.createElement("td")
    var delTag=document.createElement("button")
    delTag.setAttribute("class","deltag")
    delTag.setAttribute("onclick","delcontact(this)")
    var delValue=document.createTextNode("delete")
    delTag.appendChild(delValue)
    delTagTd.appendChild(delTag)
    trTag.appendChild(delTagTd)



    list.appendChild(trTag)

}
function editcontact(e){
    var edName=prompt("Please enter the name")
    e.parentNode.parentNode.firstChild.firstChild.nodeValue = edName

    var edNumber=+prompt("please enter the contact number")
    e.parentNode.parentNode.childNodes[1].firstChild.nodeValue = edNumber
    
}

function delcontact(e){
    e.parentNode.parentNode.remove()
}

function del(){
    list.innerHTML=""
}