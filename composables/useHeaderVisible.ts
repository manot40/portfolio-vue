export default function () {
  const visible = ref(true);
  const lastScrollPos = ref(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    visible.value = lastScrollPos.value > currentScrollPos || currentScrollPos < 300;
    lastScrollPos.value = currentScrollPos;
  };

  onMounted(() => window.addEventListener('scroll', handleScroll));

  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));

  return { visible, lastScrollPos };
}
