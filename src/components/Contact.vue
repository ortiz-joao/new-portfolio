<template>
    <div style="display: flex;align-items: center">
		<img src="/src/assets/svg/leaves.svg" style="height: 64px;">
		<div style="width: 100%; border-bottom: solid 2px #5c6f46;margin-right: 8px"/>
		<img style="height: 64px" src="/src/assets/svg/flowers.svg">
		<div style="width: 100%; border-bottom: solid 2px #5c6f46; margin-left: 8px"/>
		<img src="/src/assets/svg/leaves.svg" style="height: 64px;transform: scaleX(-1);">
	</div>
    <div style="display: flex;align-items: center;justify-content: center; font-family: oldLondon; font-size: 32px; margin: 36px 0;">
		<img src="/src/assets/svg/royal3.svg" style="height: 48px;margin-right: 8px;">
		<h2 style="color: #d26913">Let's get in touch</h2>
		<img src="/src/assets/svg/royal3.svg" style="height: 48px; margin-left: 8px">
	</div>
    <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 100px">
        <a rel="noreferrer">Linkedin</a>
        <img src="/src/assets/svg/royal.svg" style="height: 32px;">
        <a rel="noreferrer">Github</a>
        <img src="/src/assets/svg/royal.svg" style="height: 32px;">
        <a rel="noreferrer">E-mail</a>
    </div>
</template>
<style scoped>
a{
    margin:0 16px ;
    border-bottom: solid 1px black;
    cursor: pointer;
}
a:hover {
    border-bottom: solid 1px #d26913;
    transition: all 0.2s;
}
</style>