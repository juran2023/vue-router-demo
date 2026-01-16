import { ref, createSSRApp } from "vue";

const app = {
  template: `
  <h1>Digital Clock</h1>
  <p> {{date}}</p>
  <p> {{time}}</p>
    `,

  setup() {
    const date = ref('');
    const time = ref('');

    const now = new Date();
    date.value = now.toLocaleDateString();
    time.value = now.toLocaleTimeString();

    function updateTime() {
      const now = new Date();
      date.value = now.toLocaleDateString();
      time.value = now.toLocaleTimeString();
    }

    setInterval(updateTime, 1000);

    return { date, time };
  }
}

export function createApp() {
  return createSSRApp(app);
}
