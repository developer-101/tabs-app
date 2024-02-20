import { ReactElement, useState } from 'react';
import './style.scss'

export type TabType = {
    label: string;
    content: ReactElement
}

export default function CustomTabs({ tabsContent, onChange }: { tabsContent: TabType[], onChange: (currentIndex: number) => void }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClick(index: number) {
        setCurrentIndex(index);
        onChange(index);
    }

    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    {
                        tabsContent.map((tab, index) => (
                            <div key={tab.label} onClick={() => handleClick(index)} className={currentIndex == index ? 'active' : ''}>
                                <span className='label'>{tab.label}</span>
                            </div>
                        ))
                    }

                </div>
                <div className='content'>
                    {
                        tabsContent[currentIndex] && tabsContent[currentIndex].content
                    }
                </div>
            </div>
        </>
    )
}