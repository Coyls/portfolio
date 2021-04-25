export const headerAnimationLogo = (container,pathAnimation) => {
    const logo = document.querySelector(container)

    let animItem = bodymovin.loadAnimation({
        wrapper: logo,
        animType: 'svg',
        loop: true,
        path: pathAnimation
    });


}