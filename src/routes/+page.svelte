
<script>
    import yourImage from '$lib/assets/cube.png';
    import backgroundImage from '$lib/assets/background.png';

    let title = "2025 臺師大資工營";
    let subtitle = "資遊你和我的師界";
    let signupPeriod = "04/21 - 05/31";
</script>

<style>
    .button {
        display: inline-block;
        background-color: #ffcc00;
        padding: 12px 36px;
        color: black;
        font-size: 2.5rem;
        font-weight: bold;
        text-decoration: none;
        border-radius: 0px;
        margin-top: 0px;
        transition: background 0.3s ease-in-out;
    }

    .button:hover {
        background-color: #ffaa00;
    }
</style>

<div 
    class="hero" 
    style="background-image: url({backgroundImage}); background-size: cover; background-position: center; min-height: 100vh; display: flex; flex-direction: row; justify-content: space-between; align-items: center; text-align: left; padding: 2rem;"
>
    <div 
        class="left" 
        style="flex: 1; display: flex; justify-content: center; align-items: center;"
    >
        <img 
            src="{yourImage}" 
            alt="資工營主視覺" 
            class="main-image" 
            style="width: 100%; height: auto; display: block;"
        />
    </div>
    <div 
        class="right" 
        style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding-left: 2rem;"
    >
        <h1 
            style="color: white; font-family: 'Cubic 11', sans-serif; font-size: 1.5rem; margin-bottom: 1rem;"
        >
            {title}
        </h1>
        <h2 
            class="subtitle" 
            style="color: white; font-family: 'Cubic 11', sans-serif; font-size: 2.5rem; margin-bottom: 1rem;"
        >
            {subtitle}
        </h2>
        <p 
            style="color: white; font-family: 'Cubic 11', sans-serif; font-size: 1.5rem; display: flex; align-items: center; margin-bottom: 1rem;"
        >
            報名期間
            <span 
                class="signup-period" 
                style="font-size: 2.5rem; margin-left: 0.5rem;"
            >
                {signupPeriod}
            </span>
        </p>
        <a 
            href="https://docs.google.com/document/d/1yZE3Mumvc52DEaeNavlcUavxazWvIfe8/edit?tab=t.0" 
            class="button"
        >
            立即報名
        </a>
    </div>
</div>