import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../DropdownMenu/DropdownMenu';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';

export function StudyBrowserViewOptions({ tabs, onSelectTab, activeTabName }: withAppTypes) {
  const handleTabChange = (tabName: string) => {
    onSelectTab(tabName);
  };

  const activeTab = tabs.find(tab => tab.name === activeTabName);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-inputfield-main focus:border-inputfield-main iconDarkColor flex h-[26px] w-[125px] items-center justify-start rounded border bg-black p-2 text-base">
        {activeTab?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black">
        {tabs.map(tab => {
          const { name, label, studies } = tab;
          const isActive = activeTabName === name;
          const isDisabled = !studies.length;

          if (isDisabled) {
            return null;
          }

          return (
            <DropdownMenuItem
              key={name}
              className={`iconDarkColor ${isActive ? 'font-bold' : ''}`}
              onClick={() => handleTabChange(name)}
            >
              {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
