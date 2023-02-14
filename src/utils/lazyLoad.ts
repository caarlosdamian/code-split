import { lazy } from "react";

export const lazyLoad = (path: string, nameExport?: string) => {
  return lazy(() => {
    const promise = import(/* @vite-ignore */path);
    if (nameExport == null) {
      return promise;
    } else {
      return promise.then((module) => {
      
        return ({ default: module[nameExport] })
      });
    }
  });
};
