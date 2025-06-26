import React, { useEffect, useState } from 'react';
import { Icons } from '../Icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../DropdownMenu/DropdownMenu';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';

export function StudyBrowserSort({ servicesManager }: withAppTypes) {
  // Todo: this should not be here, no servicesManager should be in ui-next, only
  // customization service
  const { customizationService, displaySetService } = servicesManager.services;
  const sortFunctions = customizationService.getCustomization('studyBrowser.sortFunctions');

  const [selectedSort, setSelectedSort] = useState(sortFunctions[0]);
  const [sortDirection, setSortDirection] = useState('ascending');

  const handleSortChange = sortFunction => {
    setSelectedSort(sortFunction);
  };

  const toggleSortDirection = e => {
    e.stopPropagation();
    setSortDirection(prevDirection => (prevDirection === 'ascending' ? 'descending' : 'ascending'));
  };

  useEffect(() => {
    displaySetService.sortDisplaySets(selectedSort.sortFunction, sortDirection);
  }, [displaySetService, selectedSort, sortDirection]);

  useEffect(() => {
    const SubscriptionDisplaySetsChanged = displaySetService.subscribe(
      displaySetService.EVENTS.DISPLAY_SETS_CHANGED,
      () => {
        displaySetService.sortDisplaySets(selectedSort.sortFunction, sortDirection, true);
      }
    );
    const SubscriptionDisplaySetMetaDataInvalidated = displaySetService.subscribe(
      displaySetService.EVENTS.DISPLAY_SET_SERIES_METADATA_INVALIDATED,
      () => {
        displaySetService.sortDisplaySets(selectedSort.sortFunction, sortDirection, true);
      }
    );

    return () => {
      SubscriptionDisplaySetsChanged.unsubscribe();
      SubscriptionDisplaySetMetaDataInvalidated.unsubscribe();
    };
  }, [displaySetService, selectedSort, sortDirection]);

  return (
    <div className="flex w-[50%] items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger className="border-inputfield-main focus:border-inputfield-main iconDarkColor flex h-[26px] w-[125px] items-center justify-start rounded border bg-black p-2 text-base">
          {selectedSort.label}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black">
          {sortFunctions.map(sort => (
            <DropdownMenuItem
              key={sort.label}
              className="text-white"
              onClick={() => handleSortChange(sort)}
            >
              {sort.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <button
        onClick={toggleSortDirection}
        className="flex h-[26px] items-center justify-center"
      >
        {sortDirection === 'ascending' ? (
          <Icons.SortingAscending className="iconDarkColor w-2" />
        ) : (
          <Icons.SortingDescending className="iconDarkColor w-2" />
        )}
      </button>
    </div>
  );
}
