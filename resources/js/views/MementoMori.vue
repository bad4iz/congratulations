<template>
  <div>
    <div class="print-hidden">
      <label for="birthday">Ваша дата рождения</label>
      <input type="date" name="" value="1981-08-18" id="birthday" />

      <button id="print">Печать</button>
    </div>
    <div class="container">
      <h1>MEMENTO MORI</h1>

      <div id="content"></div>

      <div class="footer">
        <blockquote>
          Жизнь дана нам достаточно долгая, и её с избытком хватит на свершение
          величайших дел, если распределить её с умом. Но если она не
          направляется доброю целью, если наша расточительность и небрежность
          позволяют ей утекать у нас меж пальцев, то когда пробьёт наш последний
          час, мы с удивлением обнаруживаем, что жизнь, течения которой мы не
          заметили, истекла
        </blockquote>
        <figcaption>синека</figcaption>
      </div>
    </div>
  </div>
</template>

<!--&lt;!&ndash;-->
<!--  <figure>-->
<!--      <blockquote>-->
<!--          Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life. Because almost everything &#45;&#45; all external expectations, all pride, all fear of embarrassment or failure &#45;&#45; these things just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.-->
<!--      Память о том, что я скоро умру — самый важный инструмент, который помогает мне принимать сложные решения в моей жизни.-->
<!--      Потому что всё остальное — чужое мнение, вся эта гордость, вся эта боязнь смущения или провала — все эти вещи падают пред лицом смерти,-->
<!--      оставляя лишь то, что действительно важно.-->
<!--  </blockquote>-->
<!--  <figcaption>Steve Jobs</figcaption>-->
<!--</figure> &ndash;&gt;-->
<script>
  export default {
    name: 'MementoMori',
    components: {},
    methods: {
      createYear() {
        const element = document.createElement('div');
        element.classList.add('year');
        return element;
      },
      createSpace(cl, cl2) {
        const element = document.createElement('div');
        element.classList.add('week');
        if (cl) {
          element.classList.add(cl);
        }
        if (cl2) {
          element.classList.add(cl2);
        }
        return element;
      },
    },
  };
</script>

<style scoped>
  body {
    -webkit-print-color-adjust: exact !important;
  }

  .week {
    width: 7px;
    height: 7px;
    margin: 1px;
    border-radius: 1px;
  }

  .weeks-left {
    border: 1px solid grey;
  }

  .weeks-lived {
    border: 1px solid black;
    background-color: black;
  }

  .year {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  h1 {
    text-align: center;
    margin: 0;
  }

  .text {
    position: relative;
    bottom: 7px;
  }

  figcaption {
    text-align: right;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: small;
  }

  blockquote {
    margin: 10px 20px 0 20px;
    text-align: center;
    font-family: sans-serif;
    font-size: small;
  }

  .footer {
    bottom: 0;
  }

  @media print {
    .print-hidden {
      display: none;
    }

    .footer {
      position: absolute;
      bottom: 20px;
      right: 20px;
      left: 20px;
    }
  }
</style>
