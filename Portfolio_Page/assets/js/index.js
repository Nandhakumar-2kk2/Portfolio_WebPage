function toggledark(){
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.navchange').style.backgroundColor='black';
    document.querySelector('#togglewhite').style.color='rgb(255,166,0)';
    document.querySelector('#toggledark').style.color='transparent';
    alert('Please Click the bulb')
  
}

function togglewhite(){
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
    document.querySelector('#togglewhite').style.color='transparent';
    document.querySelector('#toggledark').style.color='black';
    document.querySelector('#s1bulb').style.boxShadow='0px 0px 0px 0px white';
    document.querySelector('#s1bulb').style.backgroundColor='transparent';
    document.querySelector('#navhome').style.color='black'
    document.querySelector('#navabout').style.color='black'
    document.querySelector('#navserv').style.color='black'
    document.querySelector('#navreview').style.color='black'
    document.querySelector('#navcontact').style.color='black'
    document.querySelector('.navchange').style.backgroundColor='white';
}

function weatherchange(){
    document.querySelector('#s1bulb').style.boxShadow='0px 1px 28px 14px rgba(255,166,0,0.75)';
    document.querySelector('#s1bulb').style.borderRadius='50%';
    document.querySelector('#s1bulb').style.backgroundColor='white';
    document.querySelector('body').style.color='white';
    document.querySelector('#navhome').style.color='white'
    document.querySelector('#navabout').style.color='white'
    document.querySelector('#navserv').style.color='white'
    document.querySelector('#navreview').style.color='white'
    document.querySelector('#navcontact').style.color='white'
    document.querySelector('.navchange').style.color='white'

}