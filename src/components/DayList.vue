<template>
  <section class="door-list">
    <div v-for="item in items" :class=" 'door' + ' ' + 'door-' + item.id">
      <a :href="item.href" class="number">
        {{item.name}}
      </a>
    </div>
  </section>
</template>

<script>

export default {
  name: "DayList",
  data() {
    return {
      items: [
        {
          id: 1,
          name: '1',
          href: 'one'
        },
        {
          id: 2,
          name: '2',
          href: 'two'
        },
        {
          id: 3,
          name: '3',
          href: 'three'
        },
        {
          id: 4,
          name: '4',
          href: 'four'
        },
        {
          id: 5,
          name: '5',
          href: 'five'
        },
        {
          id: 6,
          name: '6',
          href: 'six'
        },
        {
          id:7,
          name: '7',
          href: 'seven'
        },
        {
          id:8,
          name: '8',
          href: 'eight'
        },
        {
          id:9,
          name: '9',
          href: 'nine'
        },
        {
          id:10,
          name: '10',
          href: 'ten'
        },
        {
          id:11,
          name: '11',
          href: 'eleven'
        },
        {
          id:12,
          name: '12',
          href: 'twelve'
        },
        {
          id:13,
          name: '13',
          href: 'thirteen'
        },
        {
          id:14,
          name: '14',
          href: 'fourteen'
        },
        {
          id:15,
          name: '15',
          href: 'fifteen'
        },
        {
          id:16,
          name: '16',
          href: 'sixteen'
        },
        {
          id:17,
          name: '17',
          href: 'seventeen'
        },
        {
          id:18,
          name: '18',
          href: 'eighteen'
        },
        {
          id:19,
          name: '19',
          href: 'nineteen'
        },
        {
          id:20,
          name: '20',
          href: 'twenty'
        },
        {
          id:21,
          name: '21',
          href: 'twentyone'
        },
        {
          id:22,
          name: '22',
          href: 'twentytwo'
        },
        {
          id:23,
          name: '23',
          href: 'twentythree'
        },
        {
          id:24,
          name: '24',
          href: 'twentyfour'
        },
      ]
    }
  }
}

</script>

<style lang="scss">

  .number {
    display: block;
    font-size: 42.4px;
    position: relative;
    text-shadow: -1px 0 rgb(105 105 105 / 50%), 0 1px rgb(105 105 105 / 50%), 1px 0 rgb(105 105 105 / 50%), 0 -1px rgb(105 105 105 / 50%);
    color: rgba(204,204,204,.99);
    transform: scale(0.95,1.05);
    padding: 20px;
    font-weight: 700;
    text-align: center;
  }

  .door-list {
    display: flex;
    flex-wrap: wrap;
    margin:-10px;
    flex-direction: row;
    align-items: stretch;

    .door {
      flex: 1 1 160px;
      margin: 10px;
      box-sizing: border-box;
      flex-basis: 40%;
      border: medium solid rgba(105,105,105,.25);
      box-shadow: 0 3px 10px rgb(0 0 0 / 70%), inset 0 3px 10px rgb(0 0 0 / 30%);
      border-radius: 5px;
      background-color: rgba(255,255,255,.35);

      @media (min-width: 640px) {
        flex-basis: 30%;
      }

      @media (min-width: 1024px) {
        flex-basis: 20%;
      }
    }
  }
</style>