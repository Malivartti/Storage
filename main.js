class Storage { 
  constructor(key, options) { 
    const isLocalStorage = options?.storageType === undefined || options?.storageType !== 'session';

    this.key = key; 
    this.storageType = isLocalStorage ? localStorage : sessionStorage; 
    this.defaultValue = options?.defaultValue; 
  }; 

  get() { 
    return this.storageType.getItem(this.key); 
  }; 

  set(value=this.defaultValue) { 
    this.storageType.setItem(this.key, value); 
  }; 

  clear() { 
    this.storageType.removeItem(this.key); 
  }; 

  isEmpty() { 
    return ['null', 'undefined'].includes(this.get()); 
  }; 
};
