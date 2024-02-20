import CustomTabs, { TabType } from "./components/custom-tabs"


export default function App() {

  const tabs: TabType[] = [
    { label: 'First', content: <div>This is the first tab content</div> },
    { label: 'Second', content: <div>this is the second content</div> },
    { label: 'Third', content: <div>This is the third tab's content</div> }
  ]

  function handleChange(currentTabIndex: number) {
    console.log(currentTabIndex);
  }

  return (
    <>
      <CustomTabs tabsContent={tabs} onChange={handleChange} />
    </>
  )
}